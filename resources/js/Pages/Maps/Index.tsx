import GuestLayout from '@/Layouts/GuestLayout';
import { PageProps } from '@/types';
import { Link } from '@inertiajs/react'
import { Map } from '@/types';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

export default function Dashboard({ maps }: PageProps<{ maps: Array<Map> }>) {
    return (
        <GuestLayout>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {maps.map((map) => (
                    <div key={map.id}>
                        <Link href={ `./maps/${map.id}` }>
                            <Card key={map.id} className="mt-6">
                                <CardHeader color="blue-gray" className="relative h-46">
                                    <img
                                        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                                        alt="card-image"
                                    />
                                </CardHeader>
                                <CardBody>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">
                                        { map.title }
                                    </Typography>
                                    <Typography>
                                        { map.description }
                                    </Typography>
                                </CardBody>
                            </Card>
                        </Link>
                    </div>
                ))}
            </div>
        </GuestLayout>
    );
}
