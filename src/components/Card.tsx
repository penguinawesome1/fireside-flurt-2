function Card() {
    return (
        <>
            <div className="w-96 aspect-square text-wrap flex flex-col justify-between items-center bg-emerald-400 rounded-3xl relative flex-shrink-0 snap-center">
                <h1 className="text-5xl font-semi-bold absolute drop-shadow-[0_1.2px_1.2px_rgb(255,255,255)]">User 1</h1>
                <img className="border-solid hover:border-dashed border-2 border-zinc-800 rounded-3xl w-[100%] h-[70%] bg-white" src="" alt="profile image" />
                <p className="p-4 h-[30%] text-md flex items-center">Lorem ipsum dolor tur adipisicing elit. Nequr tur adipisicing elit.</p>
            </div>
        </>
    );
};

export default Card;