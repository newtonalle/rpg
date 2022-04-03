<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="4">
          <v-text-field
            label="Name"
            outlined
            :rules="[rules.required]"
            v-model="name"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="4">
          <v-btn elevation="2" color="primary" block>Confirmar</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    rules: {
      required: (value) => !!value || "Required",
    },
    name: "",
  }),
};
</script>