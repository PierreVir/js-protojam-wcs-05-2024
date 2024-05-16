import { useEffect, useState } from "react";
import "./Hobbies.scss";

function Hobbies() {
  const [activites, setActivites] = useState(null);
  const category = "sports_and_outdoors";

  const fetchActivities = () => {
    fetch(`https://api.api-ninjas.com/v1/hobbies?category=${category}`, {
      method: "GET",
      headers: { "X-Api-Key": "YOUR_API_KEY" },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.hobby && result.link) {
          setActivites(result);
        } else {
          setError("Données dae l'api incorrectes");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <>
      <div className="presentation">
        <p className="annonce">
          Comme Churchill Cherchez vous une ou plusieurs activités qui vous
          permettront de deconnecter de ce monde bruyant afin d'avoir l'esprit
          plus clair, être en harmonie avec ses propres choix et décision. on
          peut tous reconnaitre cette partie de Churchill en nous qui ont été un
          acharné du travail où on ne s'arrête jamais ! <br />
          Alors prenez le temps pour vous et de vous deconnecter ce voyage se
          veut pas visuelle mais manuelle qui vous donnera la place à votre
          déconnexion !
        </p>
      </div>

      <div className="hobbies-card">
        <button className="btn" onClick={fetchActivities}>
          Trouve ton activité
        </button>
        {activites && (
          <>
            <p>{activites.hobby}</p>
            <p>
              <a
                href={activites.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {activites.link}
              </a>
            </p>
            <p>{activites.category}</p>
          </>
        )}
      </div>

      <p className="sources">
        Les divers passe-temps de Winston Churchill lui ont permis de trouver un
        équilibre face à la pression de sa vie publique intense. Que ce soit
        l’écriture, la peinture, la maçonnerie ou le jardinage, chaque activité
        lui offrait une évasion et une manière de se ressourcer. Ces hobbies lui
        ont non seulement permis de se détendre, mais ont aussi stimulé sa
        créativité et sa réflexion, ce qui a sans doute contribué à sa réussite
        en tant que leader. 🎨🌿📝
        <br />
        Sources : Le Calme est la Clé de Ryan Holiday
      </p>
    </>
  );
}

export default Hobbies;
