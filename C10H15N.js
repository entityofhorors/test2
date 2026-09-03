//*****************************
// C10H15N MOD BY E303
// *****************************

 // ---------------- Phosphene_Gas ----------------
    elements.phosphene_gas = {
        color: ["#d4c9c9","#ebdddd","#e8e8e8"],
        behavior: behaviors.GAS,
        category: "C10H15N",
        state: "gas",                    
        density: 1.53,       
		 };
 // ---------------- PHydrogen Chloride ----------------
    elements.hydrogen_chloride = {
        color: ["#d4c9c9","#ebdddd","#e8e8e8"],
        behavior: behaviors.GAS,
        category: "C10H15N",
        state: "gas",                    
        density: 1.6423         
		 };
 // ---------------- Denatured Alcohol ----------------
    elements.denatured_alcohol = {
        color: ["#b6b8a7"],
        behavior: behaviors.LIQUID,
        category: "C10H15N",
        state: "solid",
        density: 790,
		 };
 // ---------------- Cook Waste ----------------
    elements.cook_waste = {
        color: ["#b6b8a7"],
        behavior: behaviors.LIQUID,
        category: "C10H15N",
        state: "solid",
        density: 3000,
		 };
 // ---------------- Iodine ----------------
    elements.iodine = {
        color: ["#211721","#261826","#211d21"],
        behavior: behaviors.POWDER,
        category: "C10H15N",
        state: "solid",
        density: 4944,
		 };
 // ---------------- Red Phosphorus ----------------
    elements.red_phosphorus = {
        color: ["#4d0000","#630000","#820000"],
        behavior: behaviors.POWDER,
        category: "C10H15N",
        state: "solid",
        density: 2340,
		 };
 // ---------------- Psuedo Pills ----------------
    elements.pseudo_pills = {
        color: ["#ff0000","#ff0000","#820000"],
        behavior: behaviors.POWDER,
        category: "C10H15N",
        state: "solid",
        density: 1300,
		breakInto: "pseudo_pill_powder",
		 };
 // ---------------- Pseudo Pill Powder ----------------
    elements.pseudo_pill_powder = {
        color: ["#ffe3e3","#ffcfcf","#edadad"],
        behavior: behaviors.POWDER,
        category: "C10H15N",
        state: "solid",
        density: 1015,
		                  tick: function(pixel) {
            let coords = [
                {x: pixel.x+1, y: pixel.y},
                {x: pixel.x-1, y: pixel.y},
                {x: pixel.x, y: pixel.y+1},
                {x: pixel.x, y: pixel.y-1},
            ];

            for (let c of coords) {
                if (!pixelMap[c.x] || !pixelMap[c.x][c.y]) continue;

                let n = pixelMap[c.x][c.y];
                if (!n) continue;

                if (n.element === "denatured_alcohol") {
                    if (Math.random() < 0.1) {
                        changePixel(pixel, "pseudo_solution");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
		 };
 // ---------------- Pseudo Solution ----------------
    elements.pseudo_solution = {
        color: ["#b8a7a7","#c4a7a7","#b6b8a7"],
        behavior: behaviors.LIQUID,
        category: "C10H15N",
        state: "liquid",
        density: 900,
		                  tick: function(pixel) {
            let coords = [
                {x: pixel.x+1, y: pixel.y},
                {x: pixel.x-1, y: pixel.y},
                {x: pixel.x, y: pixel.y+1},
                {x: pixel.x, y: pixel.y-1},
            ];

            for (let c of coords) {
                if (!pixelMap[c.x] || !pixelMap[c.x][c.y]) continue;

                let n = pixelMap[c.x][c.y];
                if (!n) continue;

                if (n.element === "iodine") {
                    if (Math.random() < 0.1) {
						if (pixel.temp < 700 && pixel.temp > 500) {
                        changePixel(pixel, "incomplete_cook_solution");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
						  }
		 };
 // ---------------- Incomplete Cook Solution ----------------
    elements.incomplete_cook_solution = {
        color: ["#291702","#3d2304","#1a0e01"],
        behavior: behaviors.LIQUID,
        category: "C10H15N",
        state: "liquid",
        density: 2000,
		                  tick: function(pixel) {
            let coords = [
                {x: pixel.x+1, y: pixel.y},
                {x: pixel.x-1, y: pixel.y},
                {x: pixel.x, y: pixel.y+1},
                {x: pixel.x, y: pixel.y-1},
            ];

            for (let c of coords) {
                if (!pixelMap[c.x] || !pixelMap[c.x][c.y]) continue;

                let n = pixelMap[c.x][c.y];
                if (!n) continue;

                if (n.element === "red_phosphorus") {
                    if (Math.random() < 0.1) {
                        changePixel(pixel, "cook_solution");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
		 };
 // ---------------- Cook Solution ----------------
    elements.cook_solution = {
        color: ["#291702","#3d2304","#1a0e01","#290202","#360606"],
        behavior:  [
	"XX|XX|XX",
	"M2|RL:phosphene_gas%1|M2",
	"M1|M1|M1",
],
      stateHigh: ["cook_waste","phosphene_gas"],
      tempHigh: 135,
        category: "C10H15N",
        state: "liquid",
        density: 1800,
tick: function(pixel){
  if (pixel.temp < 130 && pixel.temp > 120 && Math.random() < 0.00033){
    changePixel(pixel, "acidic_impure_c10h15n_solution")
  }
}
		 };
 // ---------------- Acidic Impure C10H15N Solution ----------------
    elements.acidic_impure_c10h15n_solution = {
        color: ["#b8a7a7","#c4a7a7","#b6b8a7"],
        behavior: behaviors.LIQUID,
        category: "C10H15N",
        state: "liquid",
        density: 1800,
		                  tick: function(pixel) {
            let coords = [
                {x: pixel.x+1, y: pixel.y},
                {x: pixel.x-1, y: pixel.y},
                {x: pixel.x, y: pixel.y+1},
                {x: pixel.x, y: pixel.y-1},
            ];

            for (let c of coords) {
                if (!pixelMap[c.x] || !pixelMap[c.x][c.y]) continue;

                let n = pixelMap[c.x][c.y];
                if (!n) continue;

                if (n.element === "lye") {
                    if (Math.random() < 0.1) {
                        changePixel(pixel, "impure_c10h15n_solution");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
		 };
 // ---------------- Impure C10H15N Solution ----------------
    elements.impure_c10h15n_solution = {
        color: ["#b8a7a7","#c4a7a7","#b6b8a7"],
        behavior: behaviors.LIQUID,
        category: "C10H15N",
        state: "liquid",
        density: 1800,
                  tick: function(pixel) {
            let coords = [
                {x: pixel.x+1, y: pixel.y},
                {x: pixel.x-1, y: pixel.y},
                {x: pixel.x, y: pixel.y+1},
                {x: pixel.x, y: pixel.y-1},
            ];

            for (let c of coords) {
                if (!pixelMap[c.x] || !pixelMap[c.x][c.y]) continue;

                let n = pixelMap[c.x][c.y];
                if (!n) continue;

                if (n.element === "lamp_oil") {
                    if (Math.random()<0.5){changePixel(pixel, "cook_waste")} else {changePixel(pixel, "organic_c10h15n_solution")}
                        deletePixel(c.x, c.y);
                    }
                }
            }
        
     };
 // ---------------- Organic C10H15N Solution ----------------
    elements.organic_c10h15n_solution = {
        color: ["#b8a7a7","#c4a7a7","#b6b8a7"],
        behavior: behaviors.LIQUID,
        category: "C10H15N",
        state: "liquid",
        density: 1800,
		                  tick: function(pixel) {
            let coords = [
                {x: pixel.x+1, y: pixel.y},
                {x: pixel.x-1, y: pixel.y},
                {x: pixel.x, y: pixel.y+1},
                {x: pixel.x, y: pixel.y-1},
            ];

            for (let c of coords) {
                if (!pixelMap[c.x] || !pixelMap[c.x][c.y]) continue;

                let n = pixelMap[c.x][c.y];
                if (!n) continue;

                if (n.element === "hydrogen_chloride") {
                    if (Math.random() < 0.1) {
                        changePixel(pixel, "crystal_c10h15n");
                        deletePixel(c.x, c.y);
                    }
                }
            }
        }
		 };
 // ---------------- Crystal C10H15N ----------------
    elements.crystal_c10h15n = {
        color: "#d9d9d9",
        behavior: behaviors.POWDER,
        category: "C10H15N",
        state: "solid",                    
        density: 928.5,       
		 };
