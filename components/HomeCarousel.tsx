import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

export default function WalletCollectionBtn() {
    return (
        <Carousel className="w-full bg-slate-200">
            <CarouselContent>
                {Array.from({ length: 4 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="h-svh p-2">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-7">
                                    <span className="text-5xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                            <div className="w-full h-full bg-black"></div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}