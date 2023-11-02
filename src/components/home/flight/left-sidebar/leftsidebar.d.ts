interface IAirlineDestinationProps {
    id: number;
    place: string;
    place1: string;
}

interface IAirlineProps {
    id: number;
    title: string;
    desc: string;
}

interface IAirlineDetailProps {
    id: number;
    title: string;
    img: string;
    label?: string;
    class?: string;
}[]