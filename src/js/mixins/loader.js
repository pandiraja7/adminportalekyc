export default {
    data() {
        return {
            loader: null,
            loading: false,
        };
    },
    watch: {
        loader() {
            const l = this.loader
            this[l] = !this[l]
            setTimeout(() => (this[l] = false), 3000)
            this.loader = null
        },
    },
}