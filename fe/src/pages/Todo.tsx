import Header from '@/widget/header';
import { Outlet } from 'react-router';

export default function Todo() {
	return <>
		<Header />
		<Outlet />
	</>
}