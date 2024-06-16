import {Divider, Link} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faGithub, faDiscord} from "@fortawesome/free-brands-svg-icons"
import PageLink from "../../types/PageLink.ts";

const FooterView = () => {

    const pages: PageLink[] = [
        {name: 'Home', href: '/'},
        {name: 'Models', href: '/models'},
        {name: 'Datasets', href: '/datasets'},
        {name: 'Get started', href: '/get-started'}
    ]

    return (
        <footer className="bg-content1 flex justify-center px-12 md:px-32 py-8">
            <div className="flex flex-col gap-8 max-w-screen-md w-full">

                {/*<div className="space-y-2 inline-block self-start">*/}
                {/*    <p>About</p>*/}
                {/*</div>*/}

                <div className="inline-flex gap-24">

                    <div className="font-medium space-y-2 text-default-600">
                        <span className="text-default-500 text-sm">Platform</span>

                        <div className="space-y-1">
                            {/*<p><Link href="/">Home</Link></p>*/}
                            {
                                pages.map((page, index) => (
                                    <p key={index}>
                                        <Link href={page.href}>{page.name}</Link>
                                    </p>
                                ))
                            }
                            {/*<p><Link href="/models">Models</Link></p>*/}
                            <p><Link href="/how-it-works">How it works</Link></p>
                            {/*<p><Link href="/get-started">Get started</Link></p>*/}
                        </div>
                    </div>

                    <div className="font-medium space-y-2 text-default-600">
                        <span className="text-default-500 text-sm">Contact</span>

                        <div className="space-y-1">
                            <p><Link href="/contact">Contact us</Link></p>
                            <p><Link href="/support">Support</Link></p>
                        </div>
                    </div>
                </div>

                <Divider/>

                <div className="inline-flex justify-between text-default-500 gap-8">
                    <p>© {2024} Crowdtrain. All rights reserved.</p>

                    <div className="space-x-4 whitespace-nowrap">

                        <Link href="https://discord.gg/D9xbHPbCQg" isExternal={true}><FontAwesomeIcon icon={faDiscord} size={"xl"} /></Link>
                        <Link href="https://github.com/Crowdtrain-AI" isExternal={true}><FontAwesomeIcon icon={faGithub} size={"xl"} /></Link>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default FooterView