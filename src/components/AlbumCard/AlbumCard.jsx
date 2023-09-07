import styles from './AlbumCard.module.css'
import AlbumImage from '../../assets/SingleAlbum.png'
const data = {
    image: AlbumImage,
    follows: "100 Follows",
    title: "New Bollywood"
}

const AlbumCard = () => {
    const { image, follows, title } = data;
    return (
        <div className={styles.albumCard}>
            <div className={styles.card}>
                <img src={image} alt={title} />
                <div>
                    <button>{follows}</button>
                </div>
            </div>
            <div>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default AlbumCard