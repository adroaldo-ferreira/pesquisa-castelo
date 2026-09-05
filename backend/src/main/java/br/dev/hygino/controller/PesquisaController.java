package br.dev.hygino.controller;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.dev.hygino.dto.EstatisticaDto;
import br.dev.hygino.dto.EstatisticaSonoDto;
import br.dev.hygino.dto.EstatisticasPesquisaDto;
import br.dev.hygino.dto.RequestPesquisaDto;
import br.dev.hygino.dto.ResponsePesquisaDto;
import br.dev.hygino.repository.PesquisaRepository;
import br.dev.hygino.service.PesquisaService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/respostas")
@CrossOrigin("*")
@RequiredArgsConstructor
public class PesquisaController {

	private final PesquisaService service;
	private final PesquisaRepository repository;

	@PostMapping
	public ResponseEntity<ResponsePesquisaDto> salvar(@RequestBody RequestPesquisaDto resposta) {

		return ResponseEntity.status(201).body(service.inserir(resposta));
	}

	@GetMapping
	public ResponseEntity<Page<ResponsePesquisaDto>> listar(Pageable pageable) {
		return ResponseEntity.ok(service.buscarTodas(pageable));
	}

	@GetMapping("/games")
	public List<EstatisticaDto> contarJogosOnline() {
		return repository.contarJogosOnline();
	}

	@GetMapping("/esportes")
	public List<EstatisticaDto> contarEsportes() {
		return repository.contarEsportes();
	}

	@GetMapping("/viagens")
	public List<EstatisticaDto> contarViagens() {
		return repository.contarViagens();
	}

	@GetMapping("/meme")
	public List<EstatisticaDto> contarMemes() {
		return repository.contarMemes();
	}

	@GetMapping("/calcados")
	public List<EstatisticaDto> contarCalcados() {
		return repository.contarCalcados();
	}

	@GetMapping("/cantores")
	public List<EstatisticaDto> contarCantores() {
		return repository.contarCantores();
	}

	@GetMapping("/jogadores")
	public List<EstatisticaDto> contarJogadores() {
		return repository.contarJogadores();
	}

	@GetMapping("/filmes")
	public List<EstatisticaDto> contarFilmes() {
		return repository.contarFilmes();
	}

	@GetMapping("/materias")
	public List<EstatisticaDto> contarMaterias() {
		return repository.contarMaterias();
	}

	@GetMapping("/lugares")
	public List<EstatisticaDto> contarLugares() {
		return repository.contarLugares();
	}

	@GetMapping("/marcas")
	public List<EstatisticaDto> contarMarcas() {
		return repository.contarMarcas();
	}

	@GetMapping("/horas-sono")
	public List<EstatisticaSonoDto> contarHorasSono() {
		return repository.contarHorasSono();
	}

	@GetMapping("/estatisticas")
	public EstatisticasPesquisaDto estatisticas() {

		return new EstatisticasPesquisaDto(
				repository.contarJogosOnline(), 
				repository.contarEsportes(),
				repository.contarViagens(),
				repository.contarMemes(),
				repository.contarCalcados(),
				repository.contarCantores(), 
				repository.contarJogadores(), 
				repository.contarFilmes(),
				repository.contarMaterias(), 
				repository.contarLugares(), 
				repository.contarMarcas(),
				repository.contarHorasSono());
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> remove(@PathVariable long id) {
		this.repository.deleteById(id);
		return ResponseEntity.noContent().build();
	}
}