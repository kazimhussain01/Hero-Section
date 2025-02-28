"use client"
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Image from 'next/image';

const services = [
    { title: 'CONSTRUCTION SERVICES', shortDesc: 'Construction & renovation services. We construct buildings, houses, plazas and provide renovation services at competitive prices.', fullDesc: 'The Handyman provides grey structure construction services and specialises in finishing and fit-out works. We construct houses, plazas, warehouses and provide related services. We are registered with Pakistan Engineering Council (PEC License #69296) as a contractor and offer services in Lahore, Islamabad & Rawalpindi. From project design, estimation, material purchase, to the management and supervision of labour, trust us to do the job for you.', imgSrc: '/construction.png' },
    { title: 'AIRCON & HVAC SERVICES', shortDesc: 'AC cleaning, AC installation, AC repair, AC diagnosis, AC shifting, R22 & R410 gas refirgerant charging, PCB kit repair etc.', fullDesc: 'We provide air conditioner installation services (including split, window, cassette type units). This includes air conditioner cleaning services, air conditioner repairs (such as diagnosis, leaks, compressor and capacitor problems, cooling issues etc), and gas refilling (*refrigerant / freon) services. Furthermore, we also provide maintenance & repair services relating to commercial units such as central cooling systems, chillers, AHU / FAHU units etc.', imgSrc: '/Aircon.png' },
    { title: 'CLEANING SERVICES', shortDesc: 'Premium cleaning & janitorial services for corporate clients. We provide comprehensive solutions to keep your facilities up and running.', fullDesc: 'The Handyman offers premium cleaning & janitorial services on contractual basis. We provide manpower resources to help you clean and upkeep commercial spaces such as banks, buildings, offices, malls and warehouses. We also offer building and facade cleaning services using specialized equipment such as worket platforms and pole systems.', imgSrc: '/cleaning.png' },
    { title: 'ELECTRICAL SERVICES', shortDesc: 'Electrical Faults, UPS Installation, TV Installation, Breaker Replacement, Plug Repair, Cable Harness, Wiring, LAN and related services', fullDesc: 'We provide electrical services in Islamabad & Rawalpindi. Our electricians are skilled, trained and professional, and can do any kind of electrical work required at your house, office or other property. We provide both services related to maintenance and repair such as diagnosing and resolving electrical problems, and those related to new construction projects such as complete MEP works, installation of wiring, distribution boxes, fixtures, lights, generators, UPS, etc.', imgSrc: '/electrition.png' },
    { title: 'PAINTER SERVICES', shortDesc: 'Affordable building & wall paint services for homes and offices. Whitewash, plastic emulsion, enamel paint, polishing & related services.', fullDesc: 'We now offer building paint, house paint and wall painting services in Islamabad & Rawalpindi. We can do paint work related to new construction as well as maintenance using the following paint types: whitewash, distemper, plastic emulsion, enamel, matt and weathershield paint. In addition to these paint types, we also provide rockwall, graphy (graffi or pocha) and Karachi sand plaster (color crete sand) application services.', imgSrc: '/painter.png' },
    { title: 'PLUMBING SERVICES', shortDesc: 'Pipe Leaks, Muslim Shower & Tap Replacement (PPR, PVC, GI or rubber), Geyser Installation, Opening Blocked Drains etc.', fullDesc: 'We provide maintenance & repair services such as diagnosis, leak detection, fixing of pipes, resolving pressure pump issues etc. Furthermore we also provide plumbing services relating to new construction works such as piping (PPR, PVC, GI or rubber), installation of water heaters, geysers, water motors, pressure pumps, toilet seats, sinks, basins, faucets etc.', imgSrc: '/plumbe.jpg' }
];

const ServicesSection = () => {
    return (
        <section id='services' className='py-10 px-5 lg:px-32'>
            <h2 className='text-4xl md:text-6xl font-bold text-center mb-10 font-urbanist'>Services</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {services.map((service, index) => (
                    <Card
                        key={index}
                        className='p-5 shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group bg-gray-100'
                    >
                        <div className='absolute inset-0 bg-gradient-to-br from-blue-500 to-green-500 opacity-0 transition-opacity duration-500 group-hover:opacity-50'></div>
                        <CardContent className='relative z-10 flex flex-col items-center'>
                            <Image src={service.imgSrc} alt={service.title} width={200} height={200} className='mb-4 rounded-sm p-5' />
                            <h3 className='text-lg md:text-xl font-semibold mb-2'>{service.title}</h3>
                            <p className='text-gray-600 mb-4 text-center text-sm md:text-base font-urbanist'>{service.shortDesc}</p>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant='outline' className='transition-colors duration-300 hover:bg-[#FAA500] hover:text-white font-urbanist text-sm md:text-md rounded-full mt-6 px-6 py-5 font-semibold lg:px-10 lg:py-8 text-md'>Learn More</Button>
                                </DialogTrigger>
                                <DialogContent className='max-w-2xl'>
                                    <DialogHeader>
                                        <DialogTitle className='text-lg md:text-xl font-urbanist font-bold'>{service.title}</DialogTitle>
                                        <DialogDescription className='text-md font-urbanist text-black'>{service.fullDesc}</DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;