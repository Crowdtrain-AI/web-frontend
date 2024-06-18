interface ProfileCardData {
    id: string;
    isTeam: boolean;
    isVerified: boolean;
    username: string;
    avatarUrl: string;
    bio: string;
    modelsCreated: number;
    modelsTrained: number;
    followers: number;
    following: number;
    githubUrl: string;
    joinedAt: number;
    country?: string;
    discordUsername: string;
}

export default ProfileCardData;