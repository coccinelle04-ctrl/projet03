export default function BookCard({ titre, auteur, estDisponible, onClickEmprunt }) {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                padding: "16px",
                borderRadius: "10px",
                margin: "10px 0",
            }}
        >
            <h3>Titre: {titre}</h3>
            <p>Auteur: {auteur}</p>
            <p>Statut: {estDisponible ? "🟢 Disponible" : "🔴 Emprunté"}</p>
            <button onClick={onClickEmprunt}>
                {estDisponible ? "Emprunter" : "Rendre"}
            </button>
        </div>
    )
}