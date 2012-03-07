#pragma strict

var woodBlocks:int = 0;
var rockBlocks:int = 0;

function getWoodBlocks()
{
	return woodBlocks;
}

function addWoodBlocks(amount:int)
{
	woodBlocks += amount;
}

function removeWoodBlocks(amount:int)
{
	woodBlocks -= amount;
}

function getRockBlocks()
{
	return rockBlocks;
}

function addRockBlocks(amount:int)
{
	rockBlocks += amount;
}

function removeRockBlocks(amount:int)
{
	rockBlocks -= amount;
}