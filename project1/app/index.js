import HelloWorld from 'common/helloworld'

export const handler = (event, context, callback) => {
    const helloworld = new HelloWorld();
    callback(null, event);
};
