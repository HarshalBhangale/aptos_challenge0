// Simple address-based counter contract in Move

// The main module that contains the counter resource
module hello_blockchain::counter {
    use std::error;
    use std::signer;
    use aptos_framework::event;

    // The counter resource
    //:!:>resource
    struct CounterResource has key {
        // Map to store the count for each address
        count: u64,
    }
    //<:!:resource

    #[event]
    struct CounterChange has drop, store {
        account: address,
        from_count: u64,
        to_count: u64,
    }

    /// There is no message present
    const ENO_MESSAGE: u64 = 0;

    #[view]
    public fun get_count(addr: address): u64 acquires CounterResource {
        assert!(exists<CounterResource>(addr), error::not_found(ENO_MESSAGE));
        borrow_global<CounterResource>(addr).count
    }

    public entry fun set_count(account: signer)
    acquires CounterResource {
        let account_addr = signer::address_of(&account);
        if (!exists<CounterResource>(account_addr)) {
            move_to(&account, CounterResource {
                count: 0,
            })
        } else {
            let old_count_holder = borrow_global_mut<CounterResource>(account_addr);
            let from_count = old_count_holder.count;
            let to_count = from_count + 1;
            event::emit(CounterChange {
                account: account_addr,
                from_count,
                to_count,
            });
            old_count_holder.count = to_count;
        }
    }

    #[test(account = @0x1)]
    public entry fun sender_can_set_count(account: signer) acquires CounterResource {
        let addr = signer::address_of(&account);
        aptos_framework::account::create_account_for_test(addr);
        set_message(account);

        assert!(
            get_count(addr) == 0,
            ENO_MESSAGE
        );
    }
}
