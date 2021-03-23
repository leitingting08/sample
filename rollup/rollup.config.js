export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.iife.js',
      format: 'iife',
      globals: {
          'lodash': '_'
      }
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      globals: {
          'lodash': '_'
      }
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm'
    },
    {
      file: 'dist/index.amd.js',
      format: 'amd'
    },
    {
      file: 'dist/index.system.js',
      format: 'system'
    }
  ],
  external: ['lodash']
}