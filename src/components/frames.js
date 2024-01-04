const importAll = (context) => context.keys().map(context);

const frames = importAll(require.context('./assets/frame', false, /\.(svg)$/));

export default frames;