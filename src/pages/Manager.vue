<template>
<q-page>
  <div id="q-app">
    <div class="q-pa-md q-gutter-sm">
      <div class="text-h6">List of approval pending leave</div>   
      <q-table  :data="data" :columns="columns" row-key="name" binary-state-sort>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="desc" :props="props">
              {{ props.row.name }}
            </q-td>
            <q-td key="userId" :props="props">
              {{ props.row.userId }}
            </q-td>
            <q-td key="period" :props="props">
              {{ props.row.period }}
            </q-td>
            <q-td key="leaveType" :props="props">
              <div class="text-pre-wrap">{{ props.row.leaveType }}</div>
            </q-td>
            <q-td key="balance" :props="props">
              {{ props.row.balance }}
            </q-td>
            <q-td key="actions" :props="props">
                <q-btn class="q-ma-sm" color="blue-grey-4" label="Approve" size="sm" ></q-btn>
                <q-btn class="q-ma-sm" color="blue-grey-4" label="Reject" size="sm" ></q-btn>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </div>
</q-page>
</template>

<script>
export default {
 name:'Manager',
  methods: {

   },

  data() {
    return {
      defaultItem: {
        name: "",
        userId: "",
        period: "",
        leaveType: "",
        balance: ""
      }, 
      
      columns: [
        {
          name: "desc",
          required: true,
          label: "Username",
          align: "center",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "userId",
          align: "center",
          label: "User Id",
          field: "userId",
          sortable: true
        },
        {
          name: "period",
          align: "center",
          label: "Period (MM/DD/YYYY)",
          field: "period",
          sortable: true
        },
        {
          name: "leaveType",
          align: "center",
          label: "Leave Type",
          field: "leaveType",
          sortable: true,
          style: "width: 10px"
        },
        {
          name: "balance",
          align: "center",
          label: "Leave Balance (R/A)",
          field: "balance",
          sortable: true,
          style: "width: 10px"
        },
        {
          name: "actions",
          align: "center",
          label: "Actions",
          field: "actions"
        }
      ],
      data: [
        {
          name: "Dan",
          userId: "55788",
          period:"12/10/2020 - 12/15/2020",
          leaveType: "Sick",
          balance: "10/20"
        },
        {
          name: "Jam",
          userId: "202034",
          period:"11/10/2020 - 11/15/2020",
          leaveType: "Casual",
          balance: "10/20"
        },
        {
          name: "Ref",
          userId: "2020121",
          period:"10/10/2020 - 10/15/2020",
          leaveType: "Refreshment",
          balance: "10/20"
        },
        
      ]
    };
  }
}
</script>

<style>

</style>