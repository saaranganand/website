export const SectionHeader = ({
    title,
    eyebrow,
    description,
}: {
    title: string;
    eyebrow: string;
    description: string;
}) => {
    return (
    <>
        <div className="flex justify-center">
            <p className="uppercase text-sm font-semibold tracking-widest text-emerald-300 text-center">{eyebrow}</p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">{title}</h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">{description}</p>
    </>
    )
}