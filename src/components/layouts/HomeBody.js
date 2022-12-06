import styles from "./styles/HomeBody.module.css";

const HomeBody = ({ data = [], len }) => {
	return (
		<div
			className={styles.homeBody}
			style={{ display: data.length === 0 ? "none" : "block" }}
		>
			{data.length === 0 ? (
				""
			) : (
				<div className={styles.topHomeBody}>
					<h5>
						<span>Add</span> blocks
					</h5>
					<span>Keep typing to filter, or escape to exit</span>
					<p>
						Filtering keyword<span>{len}</span>
					</p>
				</div>
			)}
			<div className={styles.bottomHomeBody}>
				{data.length === 0
					? ""
					: data.map((val, index) => {
						return (
							<div key={index}>
								<h1>t</h1>
								<div>
									<h5>{val.type}</h5>
									<p>{val.shortcut}</p>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default HomeBody;