import {
    Navbar,
    Typography,
    Button,
    IconButton,
  } from "@material-tailwind/react";

export default function NavBar() {
    return (
        <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 cursor-pointer py-1.5 font-medium"
                >
                    Material Tailwind
                </Typography>
                <div className="flex items-center gap-4">
                    <div className="mr-4 hidden lg:block"></div>
                    <div className="flex items-center gap-x-1">
                        <Button
                            variant="text"
                            size="sm"
                            className="hidden lg:inline-block"
                        >
                            <span>Log In</span>
                        </Button>
                        <Button
                            variant="gradient"
                            size="sm"
                            className="hidden lg:inline-block"
                        >
                            <span>Sign in</span>
                        </Button>
                    </div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                    >
                    </IconButton>
                </div>
            </div>
        </Navbar>
    )
}
