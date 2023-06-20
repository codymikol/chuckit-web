<script setup>

</script>

<template>

  <main>

    <div>

      <h3>Currently Staged Items</h3>


    </div>

    <form>

      <h3>Add New Item</h3>

      <div class="add">
        <div class="left">

          <label>
            Item Name:
            <input/>
          </label>

          <label>
            Item Description
            <input/>
          </label>

          <button>Select Image</button>

        </div>

        <div class="right">
          <label>
            Preview
            <img>
          </label>
        </div>
      </div>
    </form>

    <h3>Action</h3>

    <button>Launch Campaign</button>
    <button></button>

  </main>
</template>

<style scoped>

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.add {
  display: flex;
  flex-direction: row;
}

.left {
  display: flex;
  flex-direction: column;
  padding: 14px;
}



</style>