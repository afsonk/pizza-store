export function getDough(dough: number): string {
    switch (dough) {
        case 0:
            return 'traditional dough'
        default:
            return 'slim dough'
    }
}

