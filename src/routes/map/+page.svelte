<script lang="ts">
	export let data: [
		{
			region: string;
			moon: string;
			composition: {
				ore1: { name: string; percentage: number };
				ore2: { name: string; percentage: number };
			};
		}
	];

	// export let data: any;

	console.log(data);
	const moonData = data.data;
	console.log(moonData);
</script>

{#if moonData.length > 0}
	<table>
		<thead>
			<tr>
				<th>Region</th>
				<th>Moon</th>
				<th>Ore 1</th>
				<th>Ore 2</th>
			</tr>
		</thead>
		<tbody>
			{#each moonData as item}
				<tr>
					<td>{item.region}</td>
					<td>{item.moon}</td>
					<td>{item.composition.ore1.name} ({item.composition.ore1.percentage}%)</td>
					<td>{item.composition.ore2.name} ({item.composition.ore2.percentage}%)</td>
				</tr>
			{/each}
		</tbody>
	</table>
{:else}
	<p>No data available</p>
{/if}
