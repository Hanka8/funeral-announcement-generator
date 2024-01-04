const importAll = (context) => context.keys().map(context);

const illustrations = importAll(require.context('./assets/illustration', false, /\.(svg)$/));

export default illustrations;