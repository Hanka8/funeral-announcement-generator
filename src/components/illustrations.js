const importAll = (context) => context.keys().map(context);

const illustrations = importAll(require.context('./assets/illustration', false, /\.(webp)$/));

export default illustrations;