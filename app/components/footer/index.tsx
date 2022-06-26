interface Props {
    t: Function;
}

export const Footer = ({ t }: Props) => {
    return (
        <footer className="relative bg-purple p-6 border-white border-t-4 text-center rounded-lg">
            <div className="border-2 p-6 rounded-lg">
                <p className="italic font-bold">
                    Daniela & Daniel
                </p>
                <small>
                    {t("love")} ❤️
                </small>
            </div>
        </footer>
    );
};
