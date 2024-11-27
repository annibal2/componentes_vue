// Componente para calcular el área de un triángulo
const CalcularTriangulo = {
    template: `
        <div class="card p-3">
            <h3>Área del Triángulo</h3>
            <label>Base:</label>
            <input type="number" v-model.number="base" class="form-control mb-2">
            <label>Altura:</label>
            <input type="number" v-model.number="altura" class="form-control mb-2">
            <button class="btn btn-primary" @click="calcularArea">Calcular</button>
            <p class="mt-2">Área: {{ area }}</p>
        </div>
    `,
    data() {
        return {
            base: 0,
            altura: 0,
            area: 0
        };
    },
    methods: {
        calcularArea() {
            this.area = (this.base * this.altura) / 2;
        }
    }
};

// Componente para calcular el área de un rectángulo
const CalcularRectangulo = {
    template: `
        <div class="card p-3">
            <h3>Área del Rectángulo</h3>
            <label>Base:</label>
            <input type="number" v-model.number="base" class="form-control mb-2">
            <label>Altura:</label>
            <input type="number" v-model.number="altura" class="form-control mb-2">
            <button class="btn btn-primary" @click="calcularArea">Calcular</button>
            <p class="mt-2">Área: {{ area }}</p>
        </div>
    `,
    data() {
        return {
            base: 0,
            altura: 0,
            area: 0
        };
    },
    methods: {
        calcularArea() {
            this.area = this.base * this.altura;
        }
    }
};

// Componente para calcular el área de un círculo
const CalcularCirculo = {
    template: `
        <div class="card p-3">
            <h3>Área del Círculo</h3>
            <label>Radio:</label>
            <input type="number" v-model.number="radio" class="form-control mb-2">
            <button class="btn btn-primary" @click="calcularArea">Calcular</button>
            <p class="mt-2">Área: {{ area }}</p>
        </div>
    `,
    data() {
        return {
            radio: 0,
            area: 0
        };
    },
    methods: {
        calcularArea() {
            this.area = Math.PI * Math.pow(this.radio, 2);
        }
    }
};

// Crear la instancia principal de Vue
const app = Vue.createApp({
    components: {
        'calcular-triangulo': CalcularTriangulo,
        'calcular-rectangulo': CalcularRectangulo,
        'calcular-circulo': CalcularCirculo
    }
});

app.mount('#app');
