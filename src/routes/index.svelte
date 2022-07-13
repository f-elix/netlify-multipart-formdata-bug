<form action="/form-endpoint" method="POST" enctype="multipart/form-data">
	<label>
		<span>Submit any value</span>
		<input type="text" name="anything" />
	</label>
	<button>Submit</button>
</form>

<style lang="postcss">
	form,
	label {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	button {
		margin-top: 20px;
	}
</style>
