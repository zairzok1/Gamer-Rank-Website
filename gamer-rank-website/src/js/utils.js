function calculateOverallRank(ranks) {
    if (!Array.isArray(ranks) || ranks.length === 0) {
        return 0;
    }
    const total = ranks.reduce((acc, rank) => acc + rank, 0);
    return total / ranks.length;
}

function validateFormData(data) {
    const { username, email, ranks } = data;
    if (!username || !email || !Array.isArray(ranks)) {
        return false;
    }
    return true;
}

function formatRank(rank) {
    return rank ? rank.toString() : 'N/A';
}