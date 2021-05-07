new Vue({
    el: "#app",

    data: {
        monedas: {},
        cantidad: null,
        from: 'EUR',
        to: 'USD',
        result: 0
    },
    mounted() {
        this.getMonedas()
    },
    computed: {
        formatearMonedas() {
            return Object.values(this.monedas); //convertir las monedas en un array
        },
        calcularResultado() {
            return (Number(this.cantidad) * this.result).toFixed(2); //resultado + muestra 3 decimales
        },
        deshabilitado() {
            return this.cantidad === 0 || !this.cantidad; //cantidad sea 0 se va a desahibilitar
        }
    },
    methods: {
        getMonedas() {
            const monedas = localStorage.getItem("monedas");

            if (monedas) {
                this.monedas = JSON.parse(monedas);
                return;
            }

            axios.get('https://free.currconv.com/api/v7/currencies?apiKey=do-not-use-this-key').then(response => {
                this.monedas = response.data.results;
                localStorage.setItem('monedas', JSON.stringify(response.data.results));
                console.log(response);
            });
        },

        convertirMoneda() {
            const busqueda = `${this.from}_${this.to}`;
            axios.get(`https://free.currconv.com/api/v7/convert?q=${busqueda}&apiKey=dc0938ecd34589b2aef9`)

            .then((response) => {
                console.log(response)
                this.result = response.data.results[busqueda].val;
            })
        }
    },
    //resetea a 0 al cambiar el tipo de moneda
    watch: {
        from() {
            this.result = 0;
        },
        to() {
            this.result = 0;
        }
    }
});