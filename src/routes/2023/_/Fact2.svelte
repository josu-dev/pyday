<script lang="ts">
  import Color from '$lib/components/Color.svelte';
  import Slide from '$lib/components/reveal/Slide.svelte';
  import Code from './Code.svelte';
  import Layout from './Layout.svelte';
</script>

<section>
  <Slide>
    <Layout>
      <h2>Dato de <Color>color 2</Color></h2>
      <p>Chat gpt, copilot y toda sus amigos ia estan buenos</p>
    </Layout>
  </Slide>
  <Slide>
    <Layout>
      <h2>hasta que le pedis un codigo...</h2>
    </Layout>
  </Slide>
  <Slide>
    <Layout>
      <Code
        lang="python"
        code={`
trigger_full_reload = False

async def send_full_reload(websocket):
    global trigger_full_reload

    while True:
        if trigger_full_reload:
            trigger_full_reload = False
            await websocket.send(json.dumps({
                "type": "TRIGGER_FULL_RELOAD",
                "data": datetime.datetime.now().isoformat()
            }))

        await asyncio.sleep(REFRESH_RATE_SEC)

# en otro lugar...
trigger_full_reload = True
`}
      />
    </Layout>
  </Slide>
  <Slide>
    <Layout>
      <h2>y funciona (o aveces)</h2>
      <p>el problema es que esa boleana solo funcionaba una vez</p>
    </Layout>
  </Slide>
  <Slide>
    <Layout>
      <h2>y con mas de una pagina?</h2>
      <p>chatgpt: hmmm nose</p>
      <p>copilot: me mataste</p>
    </Layout>
  </Slide>
  <Slide>
    <Layout>
      <h2>la respuesta...</h2>
    </Layout>
  </Slide>

  <Slide>
    <Layout>
      <h2 class="text-8xl">los docs</h2>
    </Layout>
  </Slide>

  <Slide>
    <Layout>
      <h2>si la</h2>
      <p class="text-6xl font-bold">DOCUMENTACION</p>
    </Layout>
  </Slide>

  <Slide>
    <Layout>
      <Code
        lang="python"
        code={`
LR_CONNECTIONS: 'set[ws_server.WebSocketServerProtocol]' = set()

async def handle_connection(websocket):
    LR_CONNECTIONS.add(websocket)
    try:
        await websocket.wait_closed()
    finally:
        LR_CONNECTIONS.remove(websocket)

# en otro lugar...
ws_protocol.broadcast(LR_CONNECTIONS, json.dumps({
    "type": "TRIGGER_FULL_RELOAD",
    "data": datetime.datetime.now().isoformat()
}))
`}
      />
    </Layout>
  </Slide>

  <Slide>
    <Layout>
      <h2>Ahora mejor</h2>
      <p>o bueno hasta que un bug me mande a leerla denuevo...</p>
      <small class="mt-16">ya paso.</small>
    </Layout>
  </Slide>
</section>
