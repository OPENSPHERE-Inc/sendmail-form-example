

export const onRequestPost: PagesFunction<CloudflareEnv> = async (context) => {
    return context.env.CONTACTMAIL.fetch(context.request);
};
