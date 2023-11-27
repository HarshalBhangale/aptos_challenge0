import { WalletSelector } from '@aptos-labs/wallet-adapter-ant-design';

const THEMES = [
    { title: 'Light', value: 'light' },
    { title: 'Dark', value: 'dark' },
    { title: 'Cupcake', value: 'cupcake' },
];

const Navbar = ({ setTheme }: any) => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">Aptos Challenge for Stage 2</a>
            </div>
            <div className="navbar-end flex flex-row items-center">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                            <summary>Select Theme</summary>
                            <ul className="p-2">
                                {THEMES.map((k: any) =>
                                    <li key={k.value}>
                                        <a onClick={() => setTheme(k.value)}>{k.title}</a>
                                    </li>
                                )}
                            </ul>
                        </details>
                    </li>
                </ul>
                <WalletSelector />
            </div>
        </div>
    );
};

export default Navbar;