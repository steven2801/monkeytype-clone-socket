export type Player = {
	username: string;
	roomId: string;
	id: string;
	status: {
		wpm: number;
		progress: number;
	};
	isPlaying: boolean;
	isReady: boolean;
};

export type RoomState = {
	[key: string]: {
		toType: string;
		players: Player[];
		inGame: boolean;
		winner: string | null;
	};
};

export type PlayerState = {
	[key: string]: string[];
};
