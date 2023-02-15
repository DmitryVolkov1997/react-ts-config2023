import styles from './HomePage.module.scss';

interface HomePageProps { }

export const HomePage = ({ }: HomePageProps) => {
    return (
        <div className={styles.homePage}>
            HomePage Component
        </div>
    )
}


