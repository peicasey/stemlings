import { Inter, Lora, Poppins, Atkinson_Hyperlegible, Jost } from 'next/font/google'
 
// define your variable fonts
const inter = Inter({ subsets: ['latin'] })

const lora = Lora({ subsets: ['latin'] })

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], 
    subsets: ['latin'],
})

const jost = Jost({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
})

const atkins = Atkinson_Hyperlegible({
    weight: ['400', '700'],
    subsets: ['latin'],
})

export { inter, lora, poppins, atkins, jost }