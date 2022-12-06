// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import HomeBody from './HomeBody';
import HomeHeader from './HomeHeader';
import styles from "./styles/Home.module.css";


const Home = () => {
    const [text, setText] = useState("");
	const [texts, setTexts] = useState([]);
	const [listing, setListing] = useState("");
	const [filLength, setFillength] = useState(0);
	const data = [
        { "type": "Heading 1", "shortcut": "shortcut: type # + space" }, 
        { "type": "Expandable heading 1", "shortcut": "shortcut: type >># + space" }
    ]

	const filterInfo = (e) => {
		setText(e.target.value)
		const result = data.filter((val) => {

			const filling = e.target.value.length === 0 ? "" : e.target.value.substr(1, e.target.value.length - 1);
			setFillength(filling.length);
			if (filling === "") return "";
			return val.type.toLowerCase().includes(filling.toLowerCase())
		})
		setListing(result)
	}
   
	const addTitle = (e) => {
        // e.preventDefault();
        if (e.key === "Enter") {
        if (text.length > 0) {
        setTexts([...texts, text]);
		setText("");
			}
		}
	};

    return ( 
        <div>
        <HomeHeader />
        {/* <HomeBody /> */}
        <div className={styles.description}>
				<h2>
					<span>Front-End Developer Test Project</span>
				</h2>
                <hr />
				<p>
					<span>Your</span> goal is to make page that looks exactly like this
					one, and has the ability to create H1 text simply by typing / then 1,
					then typing text, and hitting enter
				</p>
				<div>
					<div>
						{texts == null
							? ""
							: texts.map((val, index) => {
								if (val.startsWith("/1")) {
									const texth = val.substr(2, val.length - 1);
									return (
										<div key={index} className={styles.texts}>
											<h1>{texth}</h1>
										</div>
									);
								} else {
									return (
										<div key={index} className={styles.texts}>
											<p>{val}</p>
										</div>
									);
								}
							})}
					</div>
					<input
						placeholder="Type / for blocks, @ to link document or people"
						value={text}
						onChange={(e) => filterInfo(e)}
						onKeyDown={(e) => addTitle(e)}
					></input>
					<HomeBody data={listing} len={filLength} />
				</div>
			</div>
        </div>
     );
}
 
export default Home;