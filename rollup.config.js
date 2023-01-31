// import polyfill from 'rollup-plugin-polyfill'
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs'
// import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser';
// import resolve from '@rollup/plugin-node-resolve';


const isDev = process.argv.includes('--development')


let defaults = {
  compilerOptions: { declaration: true }
}

console.log('isDev',isDev, process.argv)

const plugins = [
  typescript({
    tsconfigDefaults: defaults,
    tsconfig: "tsconfig.json",
  }),
  commonjs(),
  // polyfill(['./index.ts']),
  ...isDev ? [
    livereload(),
    // serve({
    //   open: true,
    //   port: 2000,
    // })
  ] : [],

  // resolve({ jsnext: true, preferBuiltins: true, })
]

export default {
  input: './src/index.ts',
  output: [{
    file: './build/index.es.js',
    format: 'es',
    // plugins: [terser()]
  }, {
    file: './build/index.js',
    format: 'cjs',
    name: 'example',
    // plugins: [terser()]
  }],
  plugins
}