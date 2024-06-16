import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    NavbarMenu,
    NavbarMenuItem, NavbarMenuToggle
} from "@nextui-org/react";
import {useState} from "react";
import PageLink from "../../types/PageLink.ts";

const NavbarView = ({location}: {location: string}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const pages: PageLink[] = [
        {name: 'Home', href: '/'},
        {name: 'Models', href: '/models'},
        {name: 'Datasets', href: '/datasets'},
        {name: 'Get started', href: '/get-started'}
    ]

    return <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
            />
            <NavbarBrand>
                <Link href="/">
                    <p className="font-bold text-inherit">Crowdtrain</p>
                </Link>
            </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {
            pages.map((page, index) => (
                <NavbarItem
                    key={index}
                    isActive={location === page.href}
                >
                    <Link
                        color={location !== page.href ? "foreground" : undefined}
                        href={ page.href }
                        aria-current={ location === page.href ? "page" : false }
                    >
                        {page.name}
                    </Link>
                </NavbarItem>
            ))
        }
            {/*<NavbarItem isActive={location === '/'}>*/}
            {/*    <Link color={location !== '/' ? "foreground" : undefined} href="/" aria-current="page">*/}
            {/*        Home*/}
            {/*    </Link>*/}
            {/*</NavbarItem>*/}
            {/*<NavbarItem isActive={location === '/models'}>*/}
            {/*    <Link color={location !== '/models' ? "foreground" : undefined} href="/models">*/}
            {/*        Models*/}
            {/*    </Link>*/}
            {/*</NavbarItem>*/}
            {/*<NavbarItem isActive={location === '/get-started'}>*/}
            {/*    <Link color={location !== '/get-started' ? "foreground" : undefined} href="/get-started">*/}
            {/*        Get started*/}
            {/*    </Link>*/}
            {/*</NavbarItem>*/}
        </NavbarContent>
        <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
                <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
                <Button as={Link} color="primary" href="#" variant="flat">
                    Sign Up
                </Button>
            </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="dark">
            {pages.map((item, index) => (
                <NavbarMenuItem key={`${item.name}-${index}`} isActive={location === item.href}>
                    <Link
                        // color={
                        //     index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                        // }
                        className="w-full"
                        href={item.href}
                        size="lg"
                        color={location !== item.href ? "foreground" : undefined}
                        aria-current={ location === item.href ? "page" : false }
                    >
                        {item.name}
                    </Link>
                </NavbarMenuItem>
            ))}

            <NavbarMenuItem key={"login"} isActive={location === "/login"}>
                <Link
                    className="w-full"
                    href={"/login"}
                    size="lg"
                    color={location !== "/login" ? "foreground" : undefined}
                    aria-current={ location === '/login' ? "page" : "false" }
                >
                    Login
                </Link>
            </NavbarMenuItem>
        </NavbarMenu>
    </Navbar>
}

export default NavbarView