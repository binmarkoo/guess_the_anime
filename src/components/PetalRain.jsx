// generates a bunch of petals with random positions, sizes, speeds
const petals = Array.from({ length: 18 }, (_, i) => {
    const size = 8 + Math.random() * 10;        // 8–18px
    const left = Math.random() * 100;           // 0–100% across screen
    const duration = 8 + Math.random() * 7;     // 8–15s to fall
    const delay = Math.random() * 10;           // staggered start
    return { id: i, size, left, duration, delay };
});

function PetalRain() {
    return (
        <>
            {petals.map((p) => (
                <span
                    key={p.id}
                    className="petal"
                    style={{
                        left: `${p.left}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        animationDuration: `${p.duration}s`,
                        animationDelay: `${p.delay}s`,
                    }}
                />
            ))}
        </>
    );
}

export default PetalRain;