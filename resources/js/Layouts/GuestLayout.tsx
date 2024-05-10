import { PropsWithChildren } from 'react';
import { ThemeProvider } from "@material-tailwind/react";
import Navbar from '@/Components/Navbar';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <ThemeProvider>
            <div className="container mx-auto">
                <Navbar />
                <div className="mx-auto max-w-screen-md py-12">
                    {children}
                </div>
            </div>
        </ThemeProvider>
    );
}
