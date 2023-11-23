const importAll = (context) => context.keys().map(context);

const frames = importAll(require.context('./assets/frame', false, /\.(webp)$/));

export default frames;