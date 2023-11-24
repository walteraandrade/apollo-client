import { AppShell, Burger, Group } from '@mantine/core';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
export const AppRoot = () => {
	const [opened, setOpened] = useState(false);

	function toggle() {
		setOpened((prev) => !prev);
	}

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
			padding="md"
		>
			<AppShell.Header>
				<Group h="100%" px="md">
					<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
				</Group>
			</AppShell.Header>
			<AppShell.Navbar p="md">
				Navbar
				<a href="/characters">Characters</a>
				<a href="/characters">Episódios</a>
			</AppShell.Navbar>
			<AppShell.Main>
				<Outlet />
			</AppShell.Main>
		</AppShell>
	);
};
