"use client"
import Link from "next/link"
import { BackgroundRadialRight } from "../BackgroundRadialRight"
import { MotionTransition } from "../MotionTransition"
import Image from "next/image"
import { Reveal } from "../Reveal"


export function FirstBlock() {
    return (
        <div className="relative p-4 md:py-8 mb-6"> {/* Ajusta mb-6 para reducir el espacio */}
            <BackgroundRadialRight />
            <div className="grid max-w-5xl mx-auto md:grid-cols-2">
                <div>
                    <Reveal>
                        <h1 className="text-5xl font-semibold">
                            La nueva
                            <span className="block degradedBlue bg-blueLight">
                                universidad de las fuerzas armadas
                            </span>
                            para aprender
                        </h1>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10">Nuestro equipo de expertos utiliza una metodología 
                            personalizada para identificar los cursos y
                            programas que mejor se ajustan a tus necesidades académicas.
                            Analizamos las áreas de estudio,
                            los planes de formación, y las opciones de desarrollo profesional para 
                            ofrecerte las mejores recomendaciones.</p>
                    </Reveal>
                    <Reveal>
                        <div className="my-8">
                            <Link href="#clients" className="px-4 py-3 rounded-md bg-blueRadial text-white">Empieza ahora</Link>
                        </div>
                    </Reveal>
                </div>
                <MotionTransition className="flex items-center justify-center">
                    <Image src="/assets/cards-block.png" alt="Card" width={450} height={450} className="h-auto w-72 md:w-full" />
                </MotionTransition>
            </div>
        </div>
    )
}
