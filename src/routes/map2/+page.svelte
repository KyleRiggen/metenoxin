<script lang="ts">
	interface IncomingData {
		data: {
			name: string;
			type: string;
		};
	}

	export let data: any;
	// console.log(data.data.name);
</script>

<div>
	<p>{data.data}</p>
	<p>{JSON.stringify(data)}</p>
</div>
