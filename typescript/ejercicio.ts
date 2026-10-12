const planetas: Record<string, number> = {
    "Tatooine": 1000,
    "Hoth": 500,
    "Endor": 800
}


for (const planeta in planetas) {
    console.log(`Planeta ${planeta} con población ${planetas[planeta]}`);
}  

