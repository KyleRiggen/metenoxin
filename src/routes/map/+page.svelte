<script lang="ts">
	interface DataItem {
		id: number;
		name: string;
		username: string;
		email: string;
	}

	export let data: { data: { id: number; name: string; username: string; email: string }[] };
	export let data2: DataItem[] = [];
	console.log('Received data:', JSON.stringify(data, null, 2));

	const tableData = data.data; // Adjust this based on the actual structure
</script>

{#if tableData && tableData.length > 0}
	<table>
		<thead>
			<tr>
				<th>ID</th>
				<th>Name</th>
				<th>Username</th>
				<th>Email</th>
			</tr>
		</thead>
		<tbody>
			{#each tableData as item}
				<tr>
					<td>{item.id}</td>
					<td>{item.name}</td>
					<td>{item.username}</td>
					<td>{item.email}</td>
				</tr>
			{/each}
		</tbody>
	</table>
{:else}
	<p>No data available</p>
{/if}
