import { useState } from 'react';
import styles from './Section.module.css'
import { CircularProgress } from '@mui/material';
import AlbumCard from '../AlbumCard/AlbumCard';
import Carousel from '../Carousel/Carousel';


const Section = ({ data, title }) => {
    const [carouselToggle, setCarouselToggle] = useState(true);
    const handleToggle = () => {
        setCarouselToggle(!carouselToggle);
    };
    return (
        <div >
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 className={styles.toggleText} onClick={handleToggle}>
                    {carouselToggle ? "Show All" : "collapse All"}
                </h4>
            </div>
            {
                !data?.length ?
                    <CircularProgress />
                    : (
                        <div className={styles.cardWrapper}>
                            {!carouselToggle ?
                                <div className={styles.wrapper}>
                                    {data.map((item) => <AlbumCard key={item.id} data={item} type="album" />)}
                                </div>
                                :
                                <Carousel
                                    data={data}
                                    componentRender={(ele) => <AlbumCard data={ele} type="album" />}
                                />
                            }
                        </div>
                    )

            }
        </div>
    )
}

export default Section