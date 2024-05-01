import "./CardListContainer.scss"
import {CardList} from "../CardList/CardList.tsx";
import {memo, useEffect, useRef, useState} from "react";

export const CardListContainer = memo(() => {

	const [scrollPosition, setScrollPosition] = useState(0);
	const ref = useRef<HTMLDivElement | null>(null);

	const handleScroll = () => {
		const currentRef = ref.current
		if (currentRef) {
			const position = currentRef.scrollTop;
			setScrollPosition(position);
		}
	};

	useEffect(() => {
		const currentRef = ref.current
		if (currentRef) {
			currentRef.addEventListener('scroll', handleScroll);
		}
		return () => {
			if (currentRef) {
				currentRef.removeEventListener('scroll', handleScroll);
			}
		};
	}, []);

	return (
		<div className="cardListContainer scroll" ref={ref}>
			{scrollPosition !== 0 && <div className="gradient">
				<div className={"topGradient"}></div>
				<div className={"bottomGradient"}></div>
			</div>}
			<CardList />
		</div>
	);
});