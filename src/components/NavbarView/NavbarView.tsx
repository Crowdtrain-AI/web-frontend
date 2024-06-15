import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

const NavbarView = ({location}: {location: string}) => {

    return <Navbar isBordered>
        <NavbarBrand>
            {/*<AcmeLogo />*/}
            <p className="font-bold text-inherit">Crowdtrain</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem isActive={location === '/'}>
                <Link color={location !== '/' ? "foreground" : undefined} href="/" aria-current="page">
                    Home
                </Link>
            </NavbarItem>
            <NavbarItem isActive={location === '/models'}>
                <Link color={location !== '/models' ? "foreground" : undefined} href="/models">
                    Models
                </Link>
            </NavbarItem>
            <NavbarItem isActive={location === '/get-started'}>
                <Link color={location !== '/get-started' ? "foreground" : undefined} href="/get-started">
                    Get started
                </Link>
            </NavbarItem>
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
    </Navbar>
}

export default NavbarView